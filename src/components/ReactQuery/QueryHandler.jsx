import ProgressSpinner from '../UI/Progress/ProgressSpinner';

export default function ({ children, status }) {
  return (
    <>
      {status === 'loading' && (
        <ProgressSpinner />
      )}

      {status === 'error' && (
        <>Error occurred while getting the data!</>
      )}

      {status === 'success' && (
        children
      )}
    </>
  );
}
