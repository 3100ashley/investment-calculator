export default function UserInput({ name,label, handleChange, value }) {

  return (
    <section >
      <label for={name}>{label}</label>
      <input required type="number" id={name} name={name} onChange={handleChange} value={value}/>
    </section>
  );
}
