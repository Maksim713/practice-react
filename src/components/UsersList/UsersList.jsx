import { useEffect, useState } from 'react';
import getUsers from '../../services/api';
import { useStateContext } from '../../context/SearchQueryCtx';

function UsersList() {
  const { searchQuery } = useStateContext();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   fetchUsers({
  //     name: searchQuery,
  //     limit: 10,
  //     page,
  //   });
  // });

  useEffect(() => {
    fetchUsers({
      name: searchQuery,
      limit: 10,
      page,
    });
  }, [searchQuery, page]);

  const fetchUsers = async ({ name, limit, page }) => {
    const { users, totalPages } = await getUsers({
      name,
      limit,
      page,
    });

    setUsers(users);
    setTotalPages(totalPages);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <ul>
      {users.map(({ firstName, lastName, image, email, phone, _id }) => {
        return (
          <li key={_id}>
            <img src={image} alt={firstName} />
            <h3>
              {firstName} {lastName}
            </h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </li>
        );
      })}
      {page === totalPages ? null : (
        <button button onClick={handleLoadMore}>
          Load More {page}/{totalPages}
        </button>
      )}
    </ul>
  );
}

export default UsersList;
