/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/frKr0Vh-3hE:APA91bFnARqdvglOyCEY4YIfYRfrOBK9qUNByXx1kBlaVk5ajHqUvugvD8Uhhz0rylmc36rXP-rio4k4Bi7kfaILQ7Uy_0r_lHy0gLlMM9IoC1MZegbBTScGfw6hjR0ea7zbV5PTwTRZ","keys":{"p256dh":"BGUeaGn90nf7NFpFQeBrFEfBe-NcqA7Bh2JSHNFvLqjoNzxf2zPGoP5DGWCl1upQ0dzkmsBu1UtxUuvTLmIMubY=","auth":"iEIjaSaWAtePKy3ezkmh4Q=="}};

var vapidPublicKey = 'BHDK908AH3YpoVBHV6wnRDo5K_K6fofOlT5ZOHMqXWLG52O7mnjhH-aERj79ansUSn7hpAn2HqdxktkJ4CaXXPE';
var vapidPrivateKey = 'R1h46wwBRsnHbWVn3WurMRL4OUzqy4gUITKd-JEkCdE';

var payload = 'Here is a payload!';

var options = {
  TTL: 60,

  vapidDetails: {
    subject: 'mailto: evandroferreiras@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }

};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
