
type embedIdProps = {
    embedId: string
}

export const YoutubeEmbed: React.FC<embedIdProps> = ({embedId}) => {
    return(
        <div className="aspect-w-16 aspect-h-9 py-3">
             <iframe 
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}