import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export function Level ({ data, action }) {
  return (
    <div   
      onClick={action}    
      className="flex justify-center items-center size-32 p-2 bg-sky-700 rounded-2xl cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-500 shadow-2xl hover:shadow-sky-600">
      <PlayArrowRoundedIcon sx={{ fontSize: '100px' }}/>
    </div>
  )
}