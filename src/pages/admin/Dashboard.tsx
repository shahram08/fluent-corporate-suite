
import { Users, FileText, Eye, BarChart } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import StatsCard from "@/components/admin/dashboard/StatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your admin dashboard!</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Users"
            value="247"
            trend={{ value: 12, isPositive: true }}
            icon={<Users size={20} />}
          />
          <StatsCard
            title="Blog Posts"
            value="45"
            trend={{ value: 8, isPositive: true }}
            icon={<FileText size={20} />}
          />
          <StatsCard
            title="Page Views"
            value="1,856"
            trend={{ value: 5.2, isPositive: true }}
            icon={<Eye size={20} />}
          />
          <StatsCard
            title="Conversion Rate"
            value="3.2%"
            trend={{ value: 1.1, isPositive: false }}
            icon={<BarChart size={20} />}
          />
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest activities across your website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">User Registration</p>
                      <p className="text-sm text-muted-foreground">New user john@example.com registered</p>
                    </div>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Post Published</p>
                      <p className="text-sm text-muted-foreground">"10 Strategies for Business Growth" published</p>
                    </div>
                    <p className="text-sm text-muted-foreground">5 hours ago</p>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">Role Changed</p>
                      <p className="text-sm text-muted-foreground">User sarah@example.com promoted to Editor</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Yesterday</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Settings Updated</p>
                      <p className="text-sm text-muted-foreground">Site settings were updated</p>
                    </div>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Website traffic and engagement metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground">Analytics charts will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Generated reports and insights</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <p className="text-muted-foreground">Reports will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
