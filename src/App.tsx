import AppRouter from "./routes/router";

export default function Layout() {
  return (
    <div className="layout">
      <div className="App">
        <AppRouter />
      </div>
    </div>
  );
}
