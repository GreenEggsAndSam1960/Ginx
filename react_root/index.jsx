import React from 'react'
import { render } from 'react-dom'

import './src/styles/base.scss'

import Image from './src/components/elements/image/image'

render(
    <h1>
        Hello World
        <Image
            src="https://ginx.tv/wp-content/uploads/2018/03/750x350-ginx-profile-ash.jpg"
            alt="test"
        />
    </h1>,
    document.getElementById('app')
)