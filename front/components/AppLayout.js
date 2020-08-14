import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from 'antd';

// 여기에 우리꺼 큰 틀을 만들어줘야 한다. 어쩌면 가장 중요한 부분이라고 생각된다.
const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode = "horizontal">
        <Menu.Item>
          <Link href="/"><a>얼리버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
