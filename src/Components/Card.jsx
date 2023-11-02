import { welcome, firework, fireworkBox } from "./Card.module.css";
/* eslint-disable react/prop-types */
const Card = ({ student }) => {
    // Desestructuro el object
  const { name, last_name, birth_date } = student;

    // Custom functions
  function setAge(date) {
    const birth_date = date.birth_date;
    const parts = birth_date.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    const today = new Date();
    
    let age = today.getFullYear() - year;

    if (
      today.getMonth() < month - 1 ||
      (today.getMonth() === month - 1 && today.getDate() < day)
    ) {
      age--;
    }

    return age;
  }

  const age = setAge({ birth_date });

  return (
    <>
      <div className={welcome}>
        <h2>Hola{" "} <span>{name} {last_name}</span> 👋</h2>
        <p>Con la fecha que ingresaste, identificamos que tienes: {age} años</p>
        <p>Que hermosa edad, muchas gracias por sumarte y ...</p>
        <h2>🥳 Bienvenido al equipo!! 🎉</h2>
      </div>
      <div className={fireworkBox}>
        <div className={firework}></div>
        <div className={firework}></div>
      </div>
    </>
  );
};

export default Card;
