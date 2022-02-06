import Head from "next/head";

export interface MetaProps {}

export const Meta = ({}: MetaProps) => {
  return (
    <Head>
      <title>Pomodoro Timer</title>
      <meta
        name="description"
        content="The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
