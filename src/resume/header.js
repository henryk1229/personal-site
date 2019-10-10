import React from 'react'
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import Bio from './bio'

const {
  firstName,
  middleInit,
  lastName,
  location,
  title,
  website,
  phone,
  email,
  github,
} = Bio

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    letterSpacing: 0.5
  },
  name: {
    fontSize: 36,
    margin: 8
  },
  contact: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: 8,
    fontSize: 10,
  },
  contactInner: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 8,
  },
})

export default () => (
  <View style={styles.container} fixed>
    <View style={styles.name}>
      <Text>{`${firstName} ${middleInit} ${lastName}`}</Text>
      <Text style={{ fontSize: 18 }}>{title}</Text>
    </View>
    <View style={styles.contact}>
      <View style={styles.contactInner}>
        <Text>{website}</Text>
        <Text>{location.city}, {location.state}</Text>
        <Text>{phone}</Text>
        <Text>{email}</Text>
        <Text>github.com/{github}</Text>
      </View>
    </View>
  </View>
)
