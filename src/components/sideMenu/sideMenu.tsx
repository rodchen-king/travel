/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-11-06 16:00:26
 * @LastEditTime: 2021-11-06 16:21:05
 * @LastEditors: rodchen
 */
import React from "react";
import styles from './sideMenu.module.css';
import { sideMenuList } from './mockup';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {
        sideMenuList.map((m, index) => (
          <Menu.SubMenu
            key={`side-menu${index}`}
            title={<span><GifOutlined />{m.title}</span>}
          >
            {m.subMenu.map((sm, smindex) => (
              <Menu.SubMenu
                key={`su-menu${smindex}`}
                title={<span><GifOutlined />{sm.title}</span>}>
                {sm.subMenu.map((sms, smsindex) => (
                  <Menu.Item
                    key={`sub-sub-menu${smsindex}`}>
                    <span><GifOutlined /></span>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu.SubMenu>
        ))
      }
    </Menu>
  )
}