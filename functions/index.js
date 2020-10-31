const functions = require('firebase-functions');
var admin = require("firebase-admin");
var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: functions.config().admin.db_url // "https://vport-5c887.firebaseio.com"
})

const db = admin.database()
const fdb = admin.firestore()

exports.createUser = functions.auth.user().onCreate(async (user) => {
  const { uid, email, displayName, photoURL } = user
  const u = {
    email,
    displayName,
    photoURL,
    createdAt: new Date().getMilliseconds(),
    level: email === functions.config().admin.email ? 0 : 5
  }
  db.ref('users').child(uid).set(u)
})

exports.deleteUser = functions.auth.user().onDelete(async (user) => {
  const { uid } = user
  db.ref('users').child(uid).remove()
})
// 게시판 글 카운팅 갯수
exports.incrementBoardCount = functions.firestore.document('boards/{bid}').onCreate(async (snap, context) => {
  try {
    await fdb.collection('meta').doc('boards').update('count', admin.firestore.FieldValue.increment(1))
  } catch (e) {
    await fdb.collection('meta').doc('boards').set({ count: 1 })
  }
})
// 게시판 글 삭제 카운팅 갯수
exports.decrementBoardCount = functions.firestore.document('boards/{bid}').onDelete(async (snap, context) => {
  await fdb.collection('meta').doc('boards').update('count', admin.firestore.FieldValue.increment(-1))
})