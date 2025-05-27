import LockIcon from '@mui/icons-material/Lock';

export function LockedLevel () {
  return (
    <div className="flex justify-center items-center size-32 p-2 bg-sky-700 opacity-50 rounded-2xl cursor-not-allowed">
      <LockIcon sx={{ fontSize: '75px' }}/>
    </div>
  )
}