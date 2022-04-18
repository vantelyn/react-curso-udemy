
export const CalendarEvent = ({ event }) => {
  // console.log(event)
  const {title, user} = event;

  return (
    <div>
      <span>{ title }</span>
      <br />
      <strong>-{ user.name }</strong>
    </div>
  )
}
