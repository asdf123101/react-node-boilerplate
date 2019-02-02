import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { GetList_list } from '../../../types/client/gql/GetList'
import { Card } from '../../Components/Card'
import { GET_LIST } from './queries'

const Hollow = () => {
  const { data, errors, loading } = useQuery(GET_LIST, { suspend: false })
  if (errors) {
    return <h1>Error</h1>
  }
  if (loading) {
    return <h1>Loading</h1>
  }
  return data.list.map((listItem: GetList_list) => (
    <Card key={listItem.id}>{listItem.name}</Card>
  ))
}

export default Hollow
