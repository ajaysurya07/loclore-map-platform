import AddFriends from "../components/AddFriends";
import Header from "../components/Header"
import ReminderForm from "../components/Reminder_form";
import User from "./User"


const Home = ({ userDetails }: any) => {
  return (
    <main>
      <Header />
      <section>
        <User
          userDetails={userDetails}
        />
      </section >
      <section   className = "flex  justify-around m-7" >
 <AddFriends
        userId={userDetails.userId}
      />
      <ReminderForm />
      </section>
     
    </main>
  )
}

export default Home;



