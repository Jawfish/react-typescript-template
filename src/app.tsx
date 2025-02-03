import { Button } from './components/shadcn/ui/button';
import { toast } from 'sonner';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/shadcn/ui/tooltip';
function App() {
  const handleSonnerClick = () => {
    toast('Other Button Clicked', {
      description: 'You have clicked the other button',
      position: 'bottom-left'
    });
  };

  const handleClick = () => {
    toast('Button Clicked', {
      description: 'You have clicked the button',
      action: {
        label: 'Click Me',
        onClick: handleSonnerClick
      }
    });
  };

  return (
    <div className='flex h-screen place-items-center bg-neutral-50'>
      <div className='mx-auto'>
        <Tooltip delayDuration={150}>
          <TooltipTrigger asChild>
            <Button className='hover:cursor-pointer' onClick={handleClick}>
              Button
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Try clicking me multiple times</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
