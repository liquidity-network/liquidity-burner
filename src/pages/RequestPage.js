import React from 'react'

import i18n from '../i18n'

import Ruler from '../components/Ruler'
import NavCard from '../components/NavCard'
import Request from '../components/Request'
import Balance from '../components/Balance'

import { useTokens } from '../contexts/Tokens'

export default ({ address, networkId, history, match, changeAlert, backButton }) => {
  const tokens = useTokens()
  const token = tokens[match.params.token]

  return (
    <div>
      <div className='send-to-address card w-100' style={{ zIndex: 1 }}>
        <NavCard title={i18n.t('request_funds.title') + ' f' + token.shortName} />
        <Balance
          token={token}
          offchain
          selected
          address={address}
        />
        <Ruler />
        <Request
          token={token}
          address={address}
          networkId={networkId}
          changeAlert={changeAlert}
        />
      </div>
      {backButton}
    </div>
  )
}
