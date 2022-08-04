interface IBook {
    id: string
    volumeInfo: {
        title : string
        authors : string[]
    }
}

interface IBookProps {
    books : string[]
}
export type {
    IBook,
    IBookProps
}
