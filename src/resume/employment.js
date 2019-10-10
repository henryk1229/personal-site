import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    fontSize: 12,
    flexDirection: 'column',
    letterSpacing: 0.5
  },
  header: {
    fontSize: 14,
    flexDirection: 'row',
  },
  project: {
    fontSize: 12
  },
  projectInner: {
    fontSize: 10
  }
})

export default () => {
  return(
    <View style={styles.container} fixed>
      <View style={styles.header}>
        <Text>Projects</Text>
      </View>
      <View style={styles.project}>
        <Text>First Project</Text>
        <View style={styles.projectInner}>
          <Text>description</Text>
          <Text>website</Text>
        </View>
        <Text>Second Project</Text>
        <View style={styles.projectInner}>
          <Text>description</Text>
          <Text>website</Text>
        </View>
      </View>
    </View>
  )
}
