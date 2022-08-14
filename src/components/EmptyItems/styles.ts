import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  separatorLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#333',
    marginBottom: 48
  },
  primaryText: {
    fontSize: 14,
    color: '#808080',
    marginTop: 16,
    fontWeight: '700'
  },
  secondaryText: {
    fontSize: 14,
    color: '#808080',
    fontWeight: '400'
  }
})