import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SingIn({singOut}) {
    return (
        <div>
            <Menu.Item>

                <Image avatar spaced="right" src="https://res.cloudinary.com/ddoosppta/image/upload/v1707845766/gcwewxlly1qk1ixnypzn.jpg" />
                <Dropdown pointing="top left" text='Uğur'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />

                        <Dropdown.Item onClick={singOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
