import ProgressSpinner from '~/components/UI/Progress/ProgressSpinner';

export default function QueryHandler({ children, status }) {
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
