export type TableData = {
    id: number;
    customer: string;
    location: string;
    orderDate: string;
    status: string;
    amount: number;
    imgUrl: string;
  };
  
  export const tableData: TableData[] = [
    {
      id: 1,
      customer: 'John Doe',
      location: 'New York',
      orderDate: '2024-03-11',
      status: 'Pending',
      amount: 50.00,
      imgUrl: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=sph',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      location: 'Los Angeles',
      orderDate: '2024-03-12',
      status: 'Completed',
      amount: 75.50,
      imgUrl: 'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.1.1572202379.1710175060&semt=sph',
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      location: 'Chicago',
      orderDate: '2024-03-13',
      status: 'Processing',
      amount: 120.75,
      imgUrl: 'https://sources.roboflow.com/dzuGOec8v6bRLhxo590fQ69a22N2/cNc6Q78185vhZDZhqEdS/original.jpg',
    },
    {
      id: 4,
      customer: 'Alice Brown',
      location: 'Houston',
      orderDate: '2024-03-14',
      status: 'Canceled',
      amount: 90.25,
      imgUrl: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710115200&semt=sph',
    },
    {
      id: 5,
      customer: 'Charlie Green',
      location: 'Miami',
      orderDate: '2024-03-15',
      status: 'Pending',
      amount: 60.80,
      imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
    },
    {
      id: 6,
      customer: 'Eva White',
      location: 'San Francisco',
      orderDate: '2024-03-16',
      status: 'Completed',
      amount: 110.00,
      imgUrl: 'https://media.istockphoto.com/id/669967498/photo/beauty-and-charm-personified.jpg?s=612x612&w=0&k=20&c=PVPb7U-vKMlsEpyPN4szSmHQRGJ5jIUNED5FbY3BAnQ=',
    },
  ];
  