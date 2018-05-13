import React from 'react';

function Commit(props) {
  let { data } = props;
  let { commit, author, html_url } = data;

  return (
    <div className="commit">
      <img  width="20" height="20" src={author.avatar_url} alt={author.login}/>
      &nbsp;
      <b><label>{author.login}</label></b>
      &nbsp;
      <a href={html_url} target="_blank">
        <label>{commit.message}</label>
      </a>
    </div>
  );
}

export default Commit;
