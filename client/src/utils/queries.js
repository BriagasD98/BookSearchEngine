import { gql } from '@apollo/client';

// "me" query which sets up Apollo Server
export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;