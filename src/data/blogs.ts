export interface Blog {
  id: string;
  title: string;
  date: string;
  content: string;
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Breaking into Cybersecurity: A Journey',
    date: '2024-03-15',
    content: 'My journey into cybersecurity began with a simple curiosity about how systems work...'
  },
  {
    id: '2',
    title: 'The Future of Cloud Computing',
    date: '2024-03-14',
    content: 'As we move towards more distributed systems, the cloud continues to evolve...'
  }
];