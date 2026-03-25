import Card from './components/card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Hrithik' age={18} img="https://images.unsplash.com/photo-1593418270780-4c6e6b7eb5af?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Sarthak' age={28} img="https://plus.unsplash.com/premium_photo-1710849581742-f2151607c745?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user='Aman' age={23} img="https://images.unsplash.com/photo-1469980098053-382eb10ba017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App