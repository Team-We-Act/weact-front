// src/service-worker.js
self.addEventListener('message', event => {
    console.log('저 쪽 테이블에서 보내신 겁니다 -> ', event);
  });