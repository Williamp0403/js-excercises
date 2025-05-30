import LockIcon from '@mui/icons-material/Lock';

export function LockedLevel () {
  return (
    <div className="flex justify-center items-center size-28 md:size-32 bg-sky-700/50  rounded-2xl cursor-not-allowed">
      <LockIcon sx={{ fontSize: '75px', fill: 'gray' }}/>
    </div>
  )
}