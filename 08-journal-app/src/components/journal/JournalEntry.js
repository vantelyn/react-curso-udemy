
export const JournalEntry = () => {
  return (
    <div className="journal__entry">
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://t2.ea.ltmcdn.com/es/posts/5/0/2/las_10_razas_de_perros_mas_populares_del_mundo_23205_600_square.jpg)'
            }}       
        ></div>
        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo día
            </p>            
            <p className="journal__entry-content">
                Incididunt non irure sit sunt.Ad sunt cupidatat non minim exercitation ex.
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
