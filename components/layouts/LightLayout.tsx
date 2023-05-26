const LightLayout = ({ children } : { children:JSX.Element}) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      color: '#000',
      padding: '10rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      { children }
    </div>
  )
}

export default LightLayout