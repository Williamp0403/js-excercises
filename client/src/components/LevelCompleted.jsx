import CheckIcon from '@mui/icons-material/Check';

export function LevelCompleted () {
  return (
    <div   
      className="flex justify-center items-center size-32 p-2 bg-sky-700 rounded-2xl">
      <CheckIcon sx={{ fontSize: '100px' }}/>
    </div>
  )
}