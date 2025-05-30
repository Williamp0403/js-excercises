import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export function Level({ data, action }) {
  return (
    <div
      onClick={action}
      className="relative flex justify-center items-center size-28 md:size-32 bg-sky-700 rounded-2xl cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-500 shadow-2xl hover:shadow-sky-600
      before:absolute before:inset-[-8px] before:rounded-3xl before:border-4 before:border-sky-400 before:animate-pulse"
    >
      <PlayArrowRoundedIcon sx={{ fontSize: '100px' }} />
    </div>
  );
}
