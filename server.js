const publicPath = path.join(__dirname, './public');

// Port Number
const port = process.env.PORT || 8080;

var app = express();

//Sending all files in public
app.use(express.static(publicPath));

// Middleware for interprocess communication
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

server.listen(port, ()=> {
  console.log(`Connected to port ${port}`);
});