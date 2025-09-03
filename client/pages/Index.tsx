import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Users, 
  User, 
  BarChart3, 
  Search, 
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function Index() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Sample data for appointments
  const appointments = [
    { id: 1, name: "Deborah Young", time: "Apr 21 10:00am - 10:30am", initials: "DY", bgColor: "#FFDA3A" },
    { id: 2, name: "Lindsey Jacobs", time: "Apr 21 10:30am - 11:00am", initials: "LJ", bgColor: "#FFAE69" },
    { id: 3, name: "John Smith", time: "Apr 21 11:00am - 11:30am", initials: "JS", bgColor: "#A0755D" },
    { id: 4, name: "Olivia Wilbur", time: "Apr 21 11:30am - 12:00pm", initials: "OW", bgColor: "#90549B" },
    { id: 5, name: "Ignacio Lulio", time: "Apr 21 1:00pm - 2:00 pm", initials: "IL", bgColor: "#00796B", highlighted: true },
  ];

  // Sample data for clients
  const clients = [
    { id: 1, name: "Jessica Stewarts", email: "Prabodhan@gmail.com", status: "Active", statusColor: "#C8E6C9" },
    { id: 2, name: "Debbie Vectra", email: "dv1092@gmail.com", status: "Active", statusColor: "#C8E6C9" },
    { id: 3, name: "Paul Sung", email: "p.sung0982@gmail.com", status: "Inactive", statusColor: "#F4BB92" },
    { id: 4, name: "Katie Munson", email: "kattieee.m@gmail.com", status: "Inactive", statusColor: "#FFAD67" },
  ];

  const navigationItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "My Clients", active: false },
    { icon: User, label: "My Profile", active: false },
    { icon: BarChart3, label: "Performance & Analytics", active: false },
  ];

  const quickActions = [
    "Update pricing",
    "Add a new video", 
    "Gather reviews",
    "Promote your page",
    "Learn engagement boost",
    "FAQ"
  ];

  return (
    <div className="min-h-screen bg-mindfolk-bg-gray">
      {/* Header */}
      <header className="h-16 bg-[#305C45] flex items-center px-4 relative z-10">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="md:hidden text-white mr-2"
        >
          {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </Button>

        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <div className="text-white font-bold text-lg sm:text-xl font-crimson">Mindfolk</div>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden sm:flex flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search Clients"
              className="pl-10 bg-white border-gray-300 w-full"
            />
          </div>
        </div>

        {/* User Avatar */}
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 ml-auto">
          <AvatarFallback className="bg-mindfolk-yellow text-black font-helvetica text-sm">CT</AvatarFallback>
        </Avatar>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`bg-white shadow-lg transition-all duration-300 min-h-[calc(100vh-64px)] ${
          sidebarCollapsed
            ? 'md:w-16 w-0 overflow-hidden md:overflow-visible'
            : 'w-64'
        } ${sidebarCollapsed ? 'md:block hidden' : 'block'} md:relative absolute z-20 md:z-auto`}>
          {/* Collapse Button - Desktop only */}
          <div className="hidden md:block p-4 border-b">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full flex items-center justify-center"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="p-4">
            {navigationItems.map((item, index) => (
              <div key={index} className={`flex items-center p-3 mb-2 transition-colors ${
                item.active
                  ? 'bg-mindfolk-light-cream border-l-8 border-mindfolk-primary text-mindfolk-primary font-bold'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}>
                <item.icon className={`w-6 h-6 flex-shrink-0 ${item.active ? 'text-mindfolk-primary' : 'text-gray-500'}`} />
                {!sidebarCollapsed && (
                  <span className="ml-3 font-helvetica">{item.label}</span>
                )}
              </div>
            ))}
            
            {!sidebarCollapsed && (
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
                  <span className="font-helvetica">Sign out</span>
                </div>
              </div>
            )}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 h-[calc(100vh-64px)] overflow-hidden p-4 sm:p-6 lg:p-6 bg-mindfolk-bg-gray">
          {/* Mobile Search Bar */}
          <div className="sm:hidden mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search Clients"
                className="pl-10 bg-white border-gray-300 w-full"
              />
            </div>
          </div>

          {/* Welcome Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-crimson font-semibold text-mindfolk-dark">
              Welcome Back, Sarah!
            </h1>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Upcoming Appointments */}
            <Card className="shadow-md">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-crimson font-medium">Upcoming Appointments</h2>
                  <Button variant="link" size="sm" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                    EDIT
                  </Button>
                </div>
                <Button variant="link" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                  <span className="hidden sm:inline">Open Calendar</span>
                  <span className="sm:hidden">Calendar</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                {appointments.map((appointment, index) => (
                  <div
                    key={appointment.id}
                    className={`flex items-center p-4 sm:p-6 border-b border-gray-200 ${
                      appointment.highlighted ? 'bg-mindfolk-light-cream' : index % 2 === 0 ? 'bg-mindfolk-section-bg' : 'bg-white'
                    }`}
                  >
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4">
                      <AvatarFallback style={{ backgroundColor: appointment.bgColor }} className="text-white font-roboto text-sm">
                        {appointment.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-helvetica font-medium text-black/87 text-sm sm:text-base truncate">{appointment.name}</div>
                      <div className="text-xs sm:text-sm text-black/60 font-helvetica">{appointment.time}</div>
                    </div>
                    <Button size="sm" className="bg-mindfolk-primary hover:bg-mindfolk-primary/90 text-mindfolk-light-cream rounded-2xl px-3 sm:px-4 text-xs sm:text-sm">
                      <span className="hidden sm:inline">Join Now</span>
                      <span className="sm:hidden">Join</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Client Dashboard */}
            <Card className="shadow-md">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-crimson font-medium">My Client Dashboard</h2>
                  <Button variant="link" size="sm" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                    EDIT
                  </Button>
                </div>
                <Button variant="link" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                  <span className="hidden sm:inline">Open clients</span>
                  <span className="sm:hidden">Clients</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-mindfolk-card-bg">
                  {clients.map((client, index) => (
                    <div
                      key={client.id}
                      className={`flex items-center p-4 sm:p-6 border-b border-gray-200 ${
                        index % 2 === 0 ? 'bg-mindfolk-section-bg' : 'bg-white'
                      }`}
                    >
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4">
                        <AvatarFallback className="bg-gray-400 text-white font-roboto text-sm">
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="font-helvetica font-medium text-black/87 text-sm sm:text-base truncate">{client.name}</div>
                        <div className="text-xs sm:text-sm text-black/50 font-helvetica truncate">{client.email}</div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        <Badge
                          style={{ backgroundColor: client.statusColor }}
                          className="text-black rounded-full px-2 sm:px-3 py-1 text-xs"
                        >
                          {client.status}
                        </Badge>
                        <Button variant="link" size="sm" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                          EDIT
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Income Details */}
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-crimson font-medium">Income Details</h2>
                  <Button variant="link" size="sm" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                    EDIT
                  </Button>
                </div>
                <Button variant="link" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                  Open Analytics <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-mindfolk-card-bg p-6 rounded">
                  <div className="mb-6">
                    <div className="font-helvetica font-medium text-black mb-4">Appointments</div>
                  </div>
                  
                  {/* Pie Chart */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-56 h-56 flex items-center justify-center">
                      {/* Pie Chart SVG - Using the exact paths from the Figma design */}
                      <svg width="226" height="226" viewBox="0 0 226 226" className="absolute">
                        <defs>
                          <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.1"/>
                          </filter>
                        </defs>
                        {/* Using the exact path data from Figma */}
                        <path d="M108.189 20.9866C86.3344 22.2044 65.6247 31.1522 49.7592 46.2316C33.8937 61.3111 23.906 81.5398 21.5802 103.304C19.2545 125.069 24.7422 146.951 37.063 165.043C49.3839 183.134 67.7353 196.256 88.839 202.064L94.9597 179.825C79.132 175.469 65.3684 165.628 56.1278 152.059C46.8872 138.49 42.7714 122.079 44.5157 105.755C46.26 89.4318 53.7508 74.2602 65.6499 62.9507C77.549 51.6411 93.0813 44.9303 109.472 44.0169L108.189 20.9866Z" fill="#FFAD67" stroke="white" strokeWidth="2"/>
                        <path d="M89.2632 202.07C104.365 206.151 120.257 206.324 135.445 202.574C150.633 198.824 164.618 191.274 176.085 180.634C187.553 169.993 196.127 156.611 201.001 141.746C205.875 126.881 206.889 111.021 203.948 95.6558L181.294 99.9918C183.499 111.516 182.739 123.411 179.083 134.56C175.427 145.709 168.997 155.745 160.396 163.725C151.796 171.706 141.307 177.368 129.916 180.181C118.525 182.993 106.606 182.863 95.2797 179.803L89.2632 202.07Z" fill="#497557" stroke="white" strokeWidth="2"/>
                        <path d="M204.356 96.5295C200.236 74.4462 188.2 54.6246 170.507 40.7827C152.814 26.9408 130.678 20.0296 108.252 21.3454L109.603 44.3718C126.423 43.385 143.024 48.5684 156.294 58.9498C169.564 69.3312 178.591 84.1974 181.681 100.76L204.356 96.5295Z" fill="#90549B" stroke="white" strokeWidth="2"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-helvetica font-bold text-mindfolk-dark">122</span>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-mindfolk-orange"></div>
                      <span className="text-sm text-black/35 font-helvetica">100 happened</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-mindfolk-primary"></div>
                      <span className="text-sm text-black/35 font-helvetica">40 cancelled</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-mindfolk-purple"></div>
                      <span className="text-sm text-black/35 font-helvetica">38 rescheduled</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-md bg-mindfolk-light-cream">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index}>
                      <Button 
                        variant="link" 
                        className="text-mindfolk-primary underline text-sm font-helvetica font-medium p-0 h-auto leading-relaxed"
                      >
                        {action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* My Business Profile */}
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-crimson font-medium">My Business Profile</h2>
                  <Button variant="link" size="sm" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                    EDIT
                  </Button>
                </div>
                <Button variant="link" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                  Open Profile <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-mindfolk-card-bg p-4 rounded">
                  <div className="mb-4">
                    <div className="font-helvetica font-medium text-black">Profile Views in the last year</div>
                  </div>
                  
                  {/* Line Chart Placeholder */}
                  <div className="h-64 flex items-end justify-between relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-black/87 font-helvetica">
                      <span>20k</span>
                      <span>17k</span>
                      <span>14k</span>
                      <span>11k</span>
                      <span>9k</span>
                      <span>6k</span>
                      <span>0</span>
                    </div>
                    
                    {/* Chart area */}
                    <div className="flex-1 ml-8 h-full relative">
                      {/* Line chart SVG - Using exact curve from Figma */}
                      <svg width="100%" height="100%" viewBox="0 0 480 220" className="absolute inset-0">
                        <path
                          d="M2.3374 220.584L85.8951 200.205C86.2266 200.124 86.5499 200.013 86.8609 199.873L163.854 165.171C164.136 165.044 164.406 164.894 164.663 164.722L242.354 112.666C242.692 112.439 243.055 112.25 243.435 112.103L319.627 82.5304C320.129 82.3352 320.601 82.0678 321.027 81.7366L396.788 22.794C397.411 22.3093 398.13 21.9631 398.897 21.7783L479.686 2.32451"
                          fill="none"
                          stroke="#FFAD67"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Data points */}
                        <circle cx="2" cy="220" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="86" cy="200" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="164" cy="165" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="242" cy="113" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="320" cy="83" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="397" cy="23" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="480" cy="2" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                      </svg>
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-black/87 font-helvetica">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
