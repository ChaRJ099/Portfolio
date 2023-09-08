import React from 'react';

function Header(props) {
    const { title } = props;
    return <header className="header">{title}</header>;
  }

  export default Header;