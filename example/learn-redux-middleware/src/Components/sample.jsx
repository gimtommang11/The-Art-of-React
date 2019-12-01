import React from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩 중...'}
        {/* loadingpost가 true라면 : 로딩중 글씨 띄워줌 */}
        {!loadingPost &&
        post && ( //post객체가 유효할때만 내부 값을 보여줌(유효성 검사)
            <div>
              <h3>{post.title}</h3>
              <h3>{post.body}</h3>
            </div>
          )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && '로딩 중...'}
        {!loadingUsers && users && (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
