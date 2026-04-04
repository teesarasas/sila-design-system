import './App.css'
import { Button } from './components/Button/Button';
import {IconButton} from './components/IconButton/IconButton';
import { Settings, Search, Plus } from 'lucide-react';
import { Badge } from './components/Badge/Badge';

function App() {

  return (
    <>
      <div className="actions">
        <Button variant="default" size="md">Default</Button>
        <Button variant="primary" size="md">Primary</Button>
        <Button variant="secondary" size="md">Secondary</Button>
        <Button variant="tertiary" size="md">Tertiary</Button>
        <Button variant="default" size="md" isDisabled>Disabled</Button>
        <Button variant="default" size="md" isLoading>Loading</Button>
      </div>
      <div className="actions">
        <IconButton variant="default" size="md" icon={<Settings />} aria-label="Settings" />
        <IconButton variant="primary" size="md" icon={<Search />} aria-label="Search" />
        <IconButton variant="secondary" size="md" icon={<Plus />} aria-label="Add" />
        <IconButton variant="tertiary" size="md" icon={<Settings />} aria-label="Settings" />
        <IconButton variant="primary" size="md" isDisabled icon={<Search />} aria-label="Search" />
        <IconButton variant="primary" size="md" isLoading icon={<Search />} aria-label="Search" />
      </div>
      <div className="actions">
        <Badge variant='info'>Info</Badge>
        <Badge variant='success'>Success</Badge>
        <Badge variant='warning'>Warning</Badge>
        <Badge variant='danger'>Danger</Badge>
        <Badge variant='neutral'>Neutral</Badge>
      </div>
    </>
  )
}

export default App
