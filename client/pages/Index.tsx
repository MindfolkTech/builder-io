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
              <div key={index} className={`flex items-center p-3 rounded-md mb-2 transition-colors ${
                item.active 
                  ? 'bg-mindfolk-secondary border-l-4 border-mindfolk-primary text-mindfolk-primary' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}>
                <item.icon className="w-6 h-6 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <span className="ml-3 font-helvetica font-medium">{item.label}</span>
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
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
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
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-crimson font-medium">Upcoming Appointments</h2>
                  <Button variant="link" size="sm" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                    EDIT
                  </Button>
                </div>
                <Button variant="link" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                  Open Calendar <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                {appointments.map((appointment, index) => (
                  <div 
                    key={appointment.id} 
                    className={`flex items-center p-6 border-b border-gray-200 ${
                      appointment.highlighted ? 'bg-mindfolk-light-cream' : index % 2 === 0 ? 'bg-mindfolk-section-bg' : 'bg-white'
                    }`}
                  >
                    <Avatar className="w-10 h-10 mr-4">
                      <AvatarFallback style={{ backgroundColor: appointment.bgColor }} className="text-white font-roboto">
                        {appointment.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-helvetica font-medium text-black/87">{appointment.name}</div>
                      <div className="text-sm text-black/60 font-helvetica">{appointment.time}</div>
                    </div>
                    <Button size="sm" className="bg-mindfolk-primary hover:bg-mindfolk-primary/90 text-mindfolk-light-cream rounded-2xl px-4">
                      Join Now <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Client Dashboard */}
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-crimson font-medium">My Client Dashboard</h2>
                  <Button variant="link" size="sm" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                    EDIT
                  </Button>
                </div>
                <Button variant="link" className="text-mindfolk-primary underline text-xs uppercase font-helvetica">
                  Open clients <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-mindfolk-card-bg">
                  {clients.map((client, index) => (
                    <div 
                      key={client.id} 
                      className={`flex items-center p-6 border-b border-gray-200 ${
                        index % 2 === 0 ? 'bg-mindfolk-section-bg' : 'bg-white'
                      }`}
                    >
                      <Avatar className="w-10 h-10 mr-4">
                        <AvatarFallback className="bg-gray-400 text-white font-roboto">
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-helvetica font-medium text-black/87">{client.name}</div>
                        <div className="text-sm text-black/50 font-helvetica">{client.email}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          style={{ backgroundColor: client.statusColor }}
                          className="text-black rounded-full px-3 py-1"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  
                  {/* Pie Chart Placeholder */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-56 h-56 flex items-center justify-center">
                      {/* Pie Chart SVG */}
                      <svg width="226" height="226" viewBox="0 0 226 226" className="absolute">
                        {/* Orange segment */}
                        <path d="M113 113 L113 10 A103 103 0 0 1 190 60 Z" fill="#FFAD67" stroke="white" strokeWidth="2"/>
                        {/* Green segment */}
                        <path d="M113 113 L190 60 A103 103 0 0 1 170 190 Z" fill="#497557" stroke="white" strokeWidth="2"/>
                        {/* Purple segment */}
                        <path d="M113 113 L170 190 A103 103 0 0 1 113 10 Z" fill="#90549B" stroke="white" strokeWidth="2"/>
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
            <Card className="shadow-md bg-mindfolk-secondary">
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
                      {/* Line chart SVG */}
                      <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute inset-0">
                        <polyline
                          fill="none"
                          stroke="#FFAD67"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points="0,180 60,150 120,100 180,60 240,40 300,20 360,10"
                        />
                        {/* Data points */}
                        <circle cx="0" cy="180" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="60" cy="150" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="120" cy="100" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="180" cy="60" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="240" cy="40" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="300" cy="20" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
                        <circle cx="360" cy="10" r="4" fill="white" stroke="#F4BB92" strokeWidth="2"/>
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
