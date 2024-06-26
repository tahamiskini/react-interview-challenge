import { useState } from 'react';
import './App.css';

function App() {
  // build tree web component :
  const tree = {
    children: [
      {
        name: 'node_modules',
        children: [
          {
            name: 'joi',
            children: [
              {
                name: 'node_moodules',
                children: [
                  {
                    name: 'index.js',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'package.json',
      },
      {
        name: 'readme.md',
      },
    ],
  };
  type TEntry = {
    name: String;
    children?: TEntry[];
  };
  const Entry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <div>
        {entry.children ? (<button className='folder' onClick={() => setIsExpanded(!isExpanded)} >
          
          {!isExpanded? "+ ":"- "}
          {entry.name}
        </button>) : <div>{entry.name}</div>}

        {
          isExpanded && <div style={{ paddingLeft: `${depth * 10}px` }}>
            {entry.children?.map((entry) => (
              <Entry entry={entry} depth={depth + 1} />
            ))}
          </div>
        }

      </div>
    );
  };
  return (
    <>
      <div>
        {tree.children.map((entry) => {
          return (
            <div>
              <Entry entry={entry} depth={1} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
