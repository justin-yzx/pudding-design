/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'
import '../css/iconfont.css'

import * as styles from './styles'

export const Logo = () => {
  const config = useConfig()
  return (
    <Flex aligmItems="center" sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <span sx={styles.logoImg} className="iconfont iconxuegao"></span>
        <span>{config.title.toUpperCase()}</span>
      </Link>
    </Flex>
  )
}
