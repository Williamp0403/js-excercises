import CheckIcon from '@mui/icons-material/Check';

export function LevelCompleted () {
  return (
    <div   
      className="flex justify-center items-center size-28 md:size-32 bg-green-700 rounded-2xl">
      <CheckIcon sx={{ fontSize: '100px' }}/>
    </div>
  )
}