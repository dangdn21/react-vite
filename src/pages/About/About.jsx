import { ReactComponent as about } from '~/components/about.md';

export default function About() {
  return (
    <div className="py-10 w-full" dir="ltr">
      <div className="mx-auto px-5 prose">
        {about({})}
      </div>
    </div>
  );
}
