import styled from 'styled-components'
import { cores } from '../../styleGlobal'

import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : cores.branca};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : 'transparent')};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: ${cores.branca};
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: transprent;
  border: 2px solid ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  color: ${cores.branca};
  border-radius: 8px;
`
