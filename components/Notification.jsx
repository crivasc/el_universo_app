import styles from '../styles/Notification.module.css'

const Notification =({ show, message })=>{
    return (
        <div>
          <div className={`w-full top-5 p-4 bg-green-300 text-green-700 drop-shadow-md
                        border-2 border-green-700 rounded-lg ${show ? styles.notificar : 'hidden'}`}>
            {message}
          </div>
        </div>
    );
  }
  
  export default Notification;