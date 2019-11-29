const loggerMiddleware = store => next => action => {
  console.group(action && action.type) //group: 새로운 인라인 그룹을 만들어줌
  console.log('이전 상태', store.getState());
  console.log('엑션', action);
  next(action) //다음 미들웨어 혹은 리듀서에 전달
  console.log('다음 상태', store.getState()); //업데이트된 상태
  console.groupEnd(); //그룹 끝
}

export default loggerMiddleware;