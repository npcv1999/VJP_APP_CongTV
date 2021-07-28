const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Send a message to the device corresponding to the provided
// registration token.

exports.sendPushNotification = functions.database
  .ref("/job") // Tên database khi mà push data sẽ gửi lại thông báo .
  .onWrite(() => {
    const message = {
      notification: {
        title: "Cổng tìm việc",
        body: "Đã có việc mới mời bạn vào xem"
      },
      topic: "job"
    };
    return admin
      .messaging()
      .send(message)
      .then((response) => {
        console.log("Gửi thông báo đến device thành công:", response);
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  });
