import { Button } from '@/components/shared/ui/Button';

export default function Debug() {
  return (
    <div className="mx-4 my-4 flex gap-12">
      <Button text="Debug button 1" variant={'success'} size={'large'} />
      <Button text="Debug button 2" variant={'primary'} size={'small'} />
      <Button text="Debug button 3" variant={'secondary'} size={'normal'} />
      <Button text="Debug button 4" variant={'delete'} size={'wide'} />
      <Button text="Debug button 5" variant={'default'} size={'tiny'} />
    </div>
  );
}
