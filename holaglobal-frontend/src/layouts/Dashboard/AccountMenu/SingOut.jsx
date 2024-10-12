import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'


export default function SingOut({singIn}) {
  return (
    <div>
        <Menu.Item>
                <Button onClick={singIn} primary>Giriş Yap</Button>
                <Button as={NavLink} to="/addUserForm" primary style={{marginLeft:'0.5em'}} >Kayıt Ol</Button>
            </Menu.Item>

    </div>
  )
}
